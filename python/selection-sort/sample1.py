def findSmallest(arr):
	smallest = arr[0] #Stores the smallest value
	smallest_index = 0 #Stores the index of the smallest value
	for i in range(1, len(arr)):
		if arr[i] < smallest:
			smallest = arr[i]
			smallest_index = i
			# print("smallest #: ",smallest)
	return smallest_index

#Now you can use this function to write selection sort:
def selectionSort(arr): #Sorts an array
	newArr = []
	for i in range(len(arr)):
		smallest = findSmallest(arr)
		newArr.append(arr.pop(smallest))
		# print(arr)
	return newArr

arrayVal = [5, 3, 6, 2, 10]
print("##before sorting##")
print(arrayVal)

print("##after sorting##")
print (selectionSort(arrayVal))