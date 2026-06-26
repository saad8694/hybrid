import fs from 'fs';
import path from 'path';

export class ReportManager {
  static saveArtifact(name: string, data: string): void {
    const folder = path.resolve(process.cwd(), 'reports', 'artifacts');
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }
    fs.writeFileSync(path.join(folder, `${name}.txt`), data);
  }
}
