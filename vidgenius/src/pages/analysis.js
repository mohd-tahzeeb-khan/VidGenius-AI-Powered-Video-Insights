'use client'

import { useState } from 'react'
import { FaYoutube } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function Analysis() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [transcript, setTranscript] = useState(null)
  const [error, setError] = useState(null)

  const validateYoutubeUrl = (url) => {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/
    return regex.test(url)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateYoutubeUrl(url)) {
      setError('Please enter a valid YouTube URL')
      return
    }

    setLoading(true)
    setError(null)
    
    try {
      // Simulate progress
      for (let i = 0; i <= 100; i += 20) {
        setProgress(i)
        await new Promise(resolve => setTimeout(resolve, 500))
      }

      // Here you would integrate with youtube-transcript-api
      const response = await fetch('/api/transcript', {
        method: 'POST',
        body: JSON.stringify({ url })
      })

      const data = await response.json()
      
      if (!data.transcript) {
        throw new Error('No transcript available for this video')
      }

      setTranscript(data.transcript)
      
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
      setProgress(0)
    }
  }

  return (
    <main className="min-h-screen p-4 md:p-8 bg-zinc-950 text-zinc-100">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center">YouTube Transcript Extractor</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaYoutube className="absolute left-3 top-1/2 -translate-y-1/2 text-red-500 text-xl" />
            <Input
              type="text"
              placeholder="Enter YouTube URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="pl-10 bg-zinc-900 border-zinc-800"
            />
          </div>

          <Button 
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 hover:bg-red-600"
          >
            {loading ? 'Processing...' : 'Extract Transcript'}
          </Button>

          {loading && (
            <div className="space-y-2">
              <Progress value={progress} className="h-2 bg-zinc-800" />
              <p className="text-sm text-center text-zinc-400">Extracting transcript...</p>
            </div>
          )}
        </form>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {transcript && (
          <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
            <h2 className="text-xl font-semibold mb-4">Transcript</h2>
            <p className="text-zinc-300 whitespace-pre-wrap">{transcript}</p>
          </div>
        )}
      </div>
    </main>
  )
}