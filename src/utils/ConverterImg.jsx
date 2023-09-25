export default function ConverterImg(img) {
    const blobArray = img;
    const blob = new Blob([Uint8Array.from(blobArray)], { type: 'image/png' });
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
}