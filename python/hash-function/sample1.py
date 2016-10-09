def hashtable():
	book = dict()

	book["apple"] = 0.67
	book["milk"] = 1.49
	book["avocado"] = 1.49

	return book

voted = {}
def check_voter(name):
	if voted.get(name):
		print ("kick them out!")
	else:
		voted[name] = True
		print ("let them vote!")

# print(hashtable())

check_voter("mike")
print(voted)
check_voter("mike")
print (voted)


dictWithArray = {}
dictWithArray["onetofive"] = [1,2,3,4,5]
dictWithArray["sixtoten"] = [6,7,8,9,10]

print(dictWithArray)