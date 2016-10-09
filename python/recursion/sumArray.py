def sum(arr):
	if len(arr) == 0:
		return 0
	else:
		currentVal = arr[0]
		arr.remove(currentVal)
		return currentVal + sum(arr)

print(sum([1,2,3,4,5,5]))