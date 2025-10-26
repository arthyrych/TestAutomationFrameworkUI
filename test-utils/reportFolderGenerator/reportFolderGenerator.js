import fs from 'fs'
import path from 'path'

export function generateReportFolder(baseDir = 'playwright-report') {
  const now = new Date()
  const folderName = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}`

  const fullPath = path.join(baseDir, folderName)

  // Ensure the base directory exists
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true })
  }

  return fullPath
}