import React, { useEffect } from 'react';
import { generatePlaceholder } from '../utils/generatePlaceholder';

const ImageGenerator: React.FC = () => {
  useEffect(() => {
    const generateImages = async () => {
      // 生成 banner 图片
      const banner1 = generatePlaceholder(1920, 400, '精选食材，用心烹饪');
      const banner2 = generatePlaceholder(1920, 400, '春季新品上市');
      const banner3 = generatePlaceholder(1920, 400, '全城配送');
      
      // 生成菜品图片
      const dish1 = generatePlaceholder(400, 300, '红烧狮子头');
      
      // 生成 logo
      const logo192 = generatePlaceholder(192, 192, '美味餐厅', '#E53E3E');
      const logo512 = generatePlaceholder(512, 512, '美味餐厅', '#E53E3E');
      
      // 生成 favicon
      const favicon = generatePlaceholder(32, 32, '美', '#E53E3E');
      
      // 保存图片
      const saveImage = (dataUrl: string, filename: string) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      
      // 保存所有图片
      saveImage(banner1, 'banner1.png');
      saveImage(banner2, 'banner2.png');
      saveImage(banner3, 'banner3.png');
      saveImage(dish1, 'dish1.png');
      saveImage(logo192, 'logo192.png');
      saveImage(logo512, 'logo512.png');
      saveImage(favicon, 'favicon.ico');
    };
    
    generateImages();
  }, []);
  
  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-2">图片生成器</h3>
      <p className="text-sm text-gray-600">图片已生成，请检查下载文件夹</p>
    </div>
  );
};

export default ImageGenerator; 