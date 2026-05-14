import { useState } from 'react'
import { motion } from 'framer-motion'
import { classifyTerrain, classifyDisease } from '../utils/api'

export default function AiDemo() {
  const [activeTab, setActiveTab] = useState('terrain')
  const [uploadedImage, setUploadedImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const base64 = event.target?.result
      setUploadedImage(base64)
      setResult(null)
      setError(null)
    }
    reader.readAsDataURL(file)
  }

  const handleClassify = async () => {
    if (!uploadedImage) return

    setLoading(true)
    setError(null)

    try {
      const base64Data = uploadedImage.split(',')[1]
      const response = activeTab === 'terrain'
        ? await classifyTerrain(base64Data)
        : await classifyDisease(base64Data)

      setResult(response.data)
    } catch (err) {
      setError(err.response?.data?.detail || 'Classification failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="demo" className="py-20 px-6 bg-dark-surface/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Live AI Demo
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-dark-card p-8 rounded-lg border border-primary/20"
        >
          <div className="mb-8">
            <div className="flex gap-4 mb-6 border-b border-primary/20">
              <button
                onClick={() => { setActiveTab('terrain'); setResult(null) }}
                className={`px-6 py-2 font-semibold transition-colors ${
                  activeTab === 'terrain'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-text-muted hover:text-primary'
                }`}
              >
                Terrain Classification
              </button>
              <button
                onClick={() => { setActiveTab('disease'); setResult(null) }}
                className={`px-6 py-2 font-semibold transition-colors ${
                  activeTab === 'disease'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-text-muted hover:text-primary'
                }`}
              >
                Disease Detection
              </button>
            </div>

            <div className="bg-dark-bg p-8 rounded-lg border-2 border-dashed border-primary/30 text-center mb-6">
              {uploadedImage ? (
                <div className="flex flex-col items-center gap-4">
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    className="max-w-xs h-auto rounded-lg"
                  />
                  <label className="px-6 py-2 bg-secondary/20 text-secondary rounded-lg cursor-pointer hover:bg-secondary/30 transition-colors">
                    Change Image
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              ) : (
                <label className="cursor-pointer block">
                  <p className="text-text-muted mb-4">Drag and drop or click to upload</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            {uploadedImage && !result && (
              <button
                onClick={handleClassify}
                disabled={loading}
                className="w-full px-6 py-3 bg-primary text-dark-bg font-bold rounded-lg hover:bg-secondary disabled:opacity-50 transition-colors"
              >
                {loading ? 'Classifying...' : 'Classify Image'}
              </button>
            )}

            {error && (
              <div className="mt-6 p-4 bg-red-500/20 text-red-400 rounded-lg">
                {error}
              </div>
            )}

            {result && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 p-6 bg-dark-bg rounded-lg border border-primary/30"
              >
                {activeTab === 'terrain' && (
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-4">Classification Result</h4>
                    <p className="text-lg text-text-muted mb-2">
                      <span className="font-semibold">Label:</span> {result.label}
                    </p>
                    <p className="text-lg text-text-muted mb-6">
                      <span className="font-semibold">Confidence:</span> {(result.confidence * 100).toFixed(2)}%
                    </p>
                    {result.heatmap_base64 && (
                      <div>
                        <p className="text-sm text-text-muted mb-2">Grad-CAM Heatmap:</p>
                        <img
                          src={`data:image/png;base64,${result.heatmap_base64}`}
                          alt="Heatmap"
                          className="w-full max-w-sm rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'disease' && (
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-4">Top Predictions</h4>
                    <div className="space-y-3">
                      {result.predictions?.map((pred, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <span className="text-text-muted w-24">{pred.label}</span>
                          <div className="flex-1 bg-dark-surface rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${pred.confidence * 100}%` }}
                              transition={{ duration: 0.5 }}
                              className="h-full bg-gradient-to-r from-primary to-secondary"
                            />
                          </div>
                          <span className="text-primary font-semibold w-16 text-right">
                            {(pred.confidence * 100).toFixed(1)}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => { setResult(null); setUploadedImage(null) }}
                  className="mt-6 w-full px-4 py-2 bg-secondary/20 text-secondary rounded-lg hover:bg-secondary/30 transition-colors"
                >
                  Try Another Image
                </button>
              </motion.div>
            )}
          </div>

          <p className="text-xs text-text-muted text-center bg-dark-bg p-3 rounded">
            ⚠️ Running on free-tier backend — first request may be slow (cold start). Models are demo weights, not production.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
