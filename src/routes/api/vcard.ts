// import { promises as fs } from 'fs';
// import path from 'path';

// export async function get() {
//     try {
//         console.log('Current working directory:', process.cwd());
//         const filePath = path.resolve('src', 'lib', 'data', 'vcard.vcf');
//         console.log('Attempting to read file at path:', filePath);

//         const fileContents = await fs.readFile(filePath, 'utf-8');
//         return {
//             status: 200,
//             body: { vCardData: fileContents },
//         };
//     } catch (error) {
//         console.error('Error reading file:', error);
//         return {
//             status: 500,
//             body: { error: 'Failed to read the vCard file.' },
//         };
//     }
// }
