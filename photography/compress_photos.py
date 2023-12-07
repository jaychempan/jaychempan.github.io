import os
from PIL import Image

def compress_images(input_directory, output_directory, quality=85):
    """
    对指定目录下所有JPEG格式图片进行压缩，并保存到指定目录。

    参数：
    - input_directory: 输入图片所在目录
    - output_directory: 输出图片保存目录
    - quality: 压缩质量（0-100之间的整数，数值越高质量越好）

    返回：
    无
    """
    try:
        # 遍历输入目录中的所有文件
        for filename in os.listdir(input_directory):
            # 检查文件是否为JPEG格式图片
            if filename.lower().endswith(('.jpg', '.jpeg')):
                input_path = os.path.join(input_directory, filename)
                
                # 打开图像文件
                with Image.open(input_path) as img:
                    # 检查是否需要旋转图片
                    if hasattr(img, '_getexif') and img._getexif() is not None:
                        orientation = img._getexif().get(0x0112, 1)
                        if orientation == 3:
                            img = img.rotate(180)
                        elif orientation == 6:
                            img = img.rotate(270)
                        elif orientation == 8:
                            img = img.rotate(90)

                    # 构造输出路径
                    output_path = os.path.join(output_directory, f'{filename.split(".")[0]}.jpeg')
                    
                    # 保存为JPEG格式，并设置压缩质量
                    img.save(output_path, 'JPEG', quality=quality)
                    print(f'图片已压缩并保存到：{output_path}')
    except Exception as e:
        print(f'压缩过程中发生错误：{e}')



input_directory = './all/large/'
output_directory = './all'
compress_images(input_directory, output_directory, quality=50)
