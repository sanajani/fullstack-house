export const debugFormData = (formData) => {
  console.log('=== FORMDATA DEBUG ===');
  
  // 1. Check if media field exists with getAll()
  const mediaFiles = formData.getAll('media');
  console.log('media files count:', mediaFiles.length);
  
  // 2. PROVE they are File objects
  mediaFiles.forEach((file, index) => {
    console.log(`File ${index}:`, {
      name: file.name,           // ← This will show the filename
      type: file.type,           // ← image/jpeg, image/png etc
      size: (file.size / 1024).toFixed(2) + 'KB', // ← File size
      isFile: file instanceof File // ← Should be true
    });
  });
  
  // 3. List ALL fields to see structure
  console.log('\nAll FormData fields:');
  for (let pair of formData.entries()) {
    if (pair[1] instanceof File) {
      console.log(`${pair[0]}: [FILE] ${pair[1].name}`);
    } else {
      console.log(`${pair[0]}:`, pair[1]);
    }
  }
};

// Use it:
// const formdata = buildPropertyFormData(data);
// debugFormData(formdata);