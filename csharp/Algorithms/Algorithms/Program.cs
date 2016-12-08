using Algorithms.BreadthFirst;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Algorithms {
    class Program {
        static void Main(string[] args) {

            RunQuicksort();


            //Console.WriteLine(test["avocado"]);
            //BreadthFirstAlgorithm.Sample1.Execute();
            //BreadthFirstAlgorithm.Sample2.Execute();



        }

        static void RunQuicksort() {
            var arraySample = new List<int>();

            for (int i = 0; i < 7000; i++) {
                arraySample.Add(i);
            }

            Stopwatch stopwatch = Stopwatch.StartNew(); //creates and start the instance of Stopwatch

            Console.WriteLine("####Quicksort Algorithm sample####\n\n\n");
            var test = Quicksort.Impl1(arraySample.ToArray());
            //Console.WriteLine(string.Join(",",test));

            stopwatch.Stop();
            Console.WriteLine("Implementation 1 complete!");
            Console.WriteLine("Elapsed time: {0} milliseconds\n\n", stopwatch.ElapsedMilliseconds);


            stopwatch = Stopwatch.StartNew();
            var test2 = Quicksort.Impl2(arraySample.ToArray());
            //Console.WriteLine(string.Join(",", test2));

            stopwatch.Stop();
            Console.WriteLine("Implementation 2 complete!");
            Console.WriteLine("Elapsed time: {0} milliseconds", stopwatch.ElapsedMilliseconds);

        }
    }
}
