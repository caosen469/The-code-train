import numpy
import cv2

# Get the image data
img = cv2.imread('C:\\Users\\sihan\\Pictures\\0.jpg', 0)
#print("Original Demensions :", str(img.shape)) # the orginal size is 
# 200*200

#change it to 400 300
width = int(img.shape[1] * 2)
height = int(img.shape[0] * 1.5)
dim = (width, height)
resized = cv2.resize(img, dim, interpolation = cv2.INTER_AREA)
print(resized.shape)
#cv2.resize(img, )
#cv2.imshow("Resized Image", resized)
#cv2.waitKey(0)