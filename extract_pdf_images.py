import fitz
import os

pdf_path = "/mnt/c/Users/royal/Downloads/Portfolio Builds.pdf"
out_dir = "/home/reggan/Development/Documents/code/work/ken-portfolio/public/projects"

os.makedirs(out_dir, exist_ok=True)
doc = fitz.open(pdf_path)

extracted = 0
for page_idx in range(len(doc)):
    page = doc[page_idx]
    image_list = page.get_images(full=True)
    for img_idx, img_info in enumerate(image_list):
        xref = img_info[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        filename = f"page_{page_idx+1}_img_{img_idx+1}.{image_ext}"
        filepath = os.path.join(out_dir, filename)
        with open(filepath, "wb") as f:
            f.write(image_bytes)
        extracted += 1
        print(f"Saved {filepath}")

print(f"Total extracted: {extracted}")
