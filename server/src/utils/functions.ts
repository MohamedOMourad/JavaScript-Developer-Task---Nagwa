import fs from 'fs';
import path from 'path';

export const getTestData = () => {
    const filePath = path.join(process.cwd(), 'src', 'resources', 'TestData.json');
    const fileData = fs.readFileSync(filePath)
    const testData = JSON.parse(fileData.toString())
    return testData
}