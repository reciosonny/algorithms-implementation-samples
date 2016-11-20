from collections import deque


graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []
graph["tomm"] = []

def person_is_seller(name):
	print(name[-1])
	return name[-1] == 'm'

def search(name):
	search_queue = deque()
	search_queue += graph[name]
	searched = [] #this array keeps track of which people you've searched before
	while search_queue:
		person = search_queue.popleft()
		print('next queue in search: '+person)
		if not person in searched: #only search this person if you haven't already searched them
			if person_is_seller(person):
				print (person + " is a mango seller!")
				return True
			else:
				print (graph[person])
				print('==people remaining in search queue==')
				search_queue += graph[person]
				print(search_queue)
				print('==end==')
				searched.append(person) #marks this person as searched
		else:
			print("note: " + person + " is already searched")
	return False

print (search("you"))