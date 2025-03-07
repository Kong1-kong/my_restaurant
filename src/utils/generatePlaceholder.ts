export const generatePlaceholder = (width: number, height: number, text: string, color: string = '#4A5568') => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';
  
  // 设置背景色
  ctx.fillStyle = '#F7FAFC';
  ctx.fillRect(0, 0, width, height);
  
  // 设置文字样式
  ctx.fillStyle = color;
  ctx.font = `${Math.min(width, height) / 10}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // 绘制文字
  ctx.fillText(text, width / 2, height / 2);
  
  return canvas.toDataURL('image/png');
}; 