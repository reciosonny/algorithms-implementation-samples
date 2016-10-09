
##sample can also be seen here: http://stackoverflow.com/questions/33923/what-is-tail-recursion
def fact(x):
	print(x)
	if x == 1:
		return 1
	else:
		retVal = x * fact(x-1)
		# print("return value w/ recursion: " + retVal)
		return retVal

print(fact(5))
