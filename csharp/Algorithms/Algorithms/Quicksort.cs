using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Algorithms {
    public class Quicksort {

        /// <summary>
        /// This implementation takes the 1st element as our pivot point. At worse-case, this performs the slowest as it still processes the array even though it's already arranged.
        /// Worse-case: O(n^2) - Quadratic time
        /// On average: O(n log n) - Linear x Logarithmic time
        /// </summary>
        /// <param name="array"></param>
        /// <returns></returns>
        public static int[] Impl1(int[] array) {

            if (array.Length < 2) {
                return array;
            }
            else {
                int pivot = array[0];
                int[] less = array.Skip(1).Where(i => i <= pivot).ToArray(); //skip pivot value(first element)
                int[] greater = array.Skip(1).Where(i => i > pivot).ToArray(); //skip pivot value(first element)

                less = Impl1(less);
                greater = Impl1(greater);
                
                var result = new List<int>();
                result = less.ToList();
                result.Add(pivot);
                foreach (var i in greater) {
                    result.Add(i);
                }


                return result.ToArray();
            }
        }

        /// <summary>
        /// This implementation takes the middle element as our pivot point. This partitions the element properly
        /// Best-case: O(n log n) - Logarithmic time
        /// </summary>
        /// <param name="array"></param>
        /// <returns></returns>
        public static int[] Impl2(int[] array) {

            if (array.Length < 2) {
                return array;
            }
            else {
                int pivotElement = array.Length / 2; //gets pivot element in the middle as possible
                int pivot = array[pivotElement];
                List<int> arrayRevised = array.ToList();
                arrayRevised.RemoveAt(pivotElement);

                int[] less = arrayRevised.Where(i => i <= pivot).ToArray(); //skip pivot value(first element)
                int[] greater = arrayRevised.Where(i => i > pivot).ToArray(); //skip pivot value(first element)

                less = Impl2(less);
                greater = Impl2(greater);

                var result = new List<int>();
                result = less.ToList();
                result.Add(pivot);
                foreach (var i in greater) {
                    result.Add(i);
                }


                return result.ToArray();
            }
        }
    }
}
