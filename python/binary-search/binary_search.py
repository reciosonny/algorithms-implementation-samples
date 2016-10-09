def binary_search(list, item):
	low = 0
	dots = 0
	high = len(list) - 1 #highest element of array is pointed at

	while low <= high:
		###ignore this###
		printDots = ""
		for x in range(1 ,dots):
			printDots+="."
		pass

		print("evaluating algorithm"+printDots)
		dots+=1
		if dots>=10:
			dots=1
		pass
		###END###

		mid = int(round((low + high) / 2,0))
		guess = list[mid]
		print("guess: ",guess)
		if guess == item:
			print("you have guessed it!")
			return mid
		if guess > item:
			high = mid - 1
		else:
			low = mid + 1
		
	return None

print("testing binary search...")

my_list = [1, 3, 5, 7, 9]
# print (my_list)
# print (my_list[2])

print (binary_search(my_list, 7)) # => 1
# print (binary_search(my_list, -1)) # => None

# print("done!")