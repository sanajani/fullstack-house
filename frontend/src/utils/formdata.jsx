
export const buildPropertyFormData = (data, imagesWithFiles) => {
  const formData = new FormData();
  
  // Helper to append nested objects
  const appendJSON = (key, value) => {
    if (value !== undefined && value !== null) {
      formData.append(key, JSON.stringify(value));
    }
  };
  
  // Simple fields
  const simpleFields = ['title', 'description', 'propertyType', 'transaction'];
  simpleFields.forEach(field => {
    if (data[field]) formData.append(field, data[field]);
  });
  
  // Nested objects (convert to JSON)
  appendJSON('location', data.location);
  appendJSON('details', data.details);
  appendJSON('price', data.price);
  appendJSON('amenities', data.amenities);
  
  // Handle images - FILES come from LOCAL STATE (imagesWithFiles)
  if (imagesWithFiles && imagesWithFiles.length > 0) {
    imagesWithFiles.forEach((image) => {
      if (image.file && image.file instanceof File) {
        formData.append('media', image.file);
      }
    });
  }
  
  // Metadata comes from form data (data.media)
  if (data.media && data.media.length > 0) {
    data.media.forEach((metadata, index) => {
      appendJSON(`media_metadata[${index}]`, {
        public_id: metadata.public_id,
        caption: metadata.caption,
        isPrimary: metadata.isPrimary
      });
    });
  }
  
  return formData;
};