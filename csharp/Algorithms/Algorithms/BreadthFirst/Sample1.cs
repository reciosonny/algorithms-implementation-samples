using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Algorithms.BreadthFirst {

    public class BreadthFirstAlgorithm {
        public class Sample1 {
            public class Person {
                public Person(string name) {
                    this.name = name;
                }

                public string name { get; set; }
                public List<Person> Friends {
                    get {
                        return FriendsList;
                    }
                }

                public void isFriendOf(Person p) {
                    FriendsList.Add(p);
                }

                List<Person> FriendsList = new List<Person>();

                public override string ToString() {
                    return name;
                }
            }

            public class BreadthFirstAlgorithm {
                public Person BuildFriendGraph() {
                    Person Aaron = new Person("Aaron");
                    Person Betty = new Person("Betty");
                    Person Brian = new Person("Brian");
                    Aaron.isFriendOf(Betty);
                    Aaron.isFriendOf(Brian);

                    Person Catherine = new Person("Catherine");
                    Person Carson = new Person("Carson");
                    Person Darian = new Person("Darian");
                    Person Derek = new Person("Derek");
                    Betty.isFriendOf(Catherine);
                    Betty.isFriendOf(Darian);
                    Brian.isFriendOf(Carson);
                    Brian.isFriendOf(Derek);

                    return Aaron;
                }

                //http://en.wikipedia.org/wiki/Breadth-first_search#Pseudocode
                public Person Search(Person root, string nameToSearchFor) {
                    Queue<Person> Q = new Queue<Person>();
                    HashSet<Person> S = new HashSet<Person>();
                    Q.Enqueue(root);
                    S.Add(root);

                    while (Q.Count > 0) {
                        Person p = Q.Dequeue();
                        if (p.name == nameToSearchFor)
                            return p;
                        foreach (Person friend in p.Friends) {
                            if (!S.Contains(friend)) {
                                Q.Enqueue(friend);
                                S.Add(friend);
                            }
                        }
                    }
                    return null;
                }

                public void Traverse(Person root) {
                    Queue<Person> traverseOrder = new Queue<Person>();

                    Queue<Person> Q = new Queue<Person>();
                    HashSet<Person> S = new HashSet<Person>();
                    Q.Enqueue(root);
                    S.Add(root);

                    while (Q.Count > 0) {
                        Person p = Q.Dequeue();
                        traverseOrder.Enqueue(p);

                        foreach (Person friend in p.Friends) {
                            if (!S.Contains(friend)) {
                                Q.Enqueue(friend);
                                S.Add(friend);
                            }
                        }
                    }

                    while (traverseOrder.Count > 0) {
                        Person p = traverseOrder.Dequeue();
                        Console.WriteLine(p);
                    }
                }
            }

            public static void Execute() {
                BreadthFirstAlgorithm b = new BreadthFirstAlgorithm();
                Person root = b.BuildFriendGraph();
                Console.WriteLine("Traverse\n------");
                b.Traverse(root);

                Console.WriteLine("\nSearch\n------");
                Person p = b.Search(root, "Catherine");
                Console.WriteLine(p == null ? "Person not found" : p.name);
                p = b.Search(root, "Alex");
                Console.WriteLine(p == null ? "Person not found" : p.name);
            }
        }

        public class Sample2 {

            public static Dictionary<string, string[]> GetSamples() {
                var graph = new Dictionary<string, string[]>();
                graph["you"] = new string[] { "alice", "bob", "claire" };
                graph["bob"] = new string[] { "anuj", "peggy" };
                graph["alice"] = new string[] { "peggy" };
                graph["claire"] = new string[] { "thom", "johnny" };
                graph["anuj"] = new string[] { };
                graph["peggy"] = new string[] { };
                graph["thom"] = new string[] { };
                graph["johnny"] = new string[] { };
                graph["tomm"] = new string[] { };


                return graph;
            }
            static bool IsPersonMangoSeller(string name) {
                return name[name.Count() - 1] == 'm';
            }

            static void Search(string name) {
                var graph = GetSamples();
                var search_queue = new Queue<string>();
                var searched = new List<string>();
                //search_queue += graph[name];
                foreach (var item in graph[name]) {
                    search_queue.Enqueue(item);
                }

                while (search_queue.Count > 0) {
                    string person = search_queue.Dequeue();

                    if (!searched.Any(x => x == person)) {
                        if (IsPersonMangoSeller(person)) {
                            Console.WriteLine("{0} is a mango seller!", person);
                        }
                        else {
                            foreach (var item in graph[person]) {
                                search_queue.Enqueue(item);
                            }
                            searched.Add(person);
                        }

                    }


                }

            }

            public static void Execute() {
                Search("you");
            }
        }

    }
}
