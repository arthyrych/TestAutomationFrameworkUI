import fs from "fs"
import path from "path"

export function generateReportFolder(baseDir = "playwright-report") {
  const now = new Date()
  const pad = value => String(value).padStart(2, "0")
  const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`
  const time = `${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`
  const folderName = `${date}_${time}`

  const fullPath = path.join(baseDir, folderName)

  // Ensure the base directory exists
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true })
  }

  return fullPath
}
