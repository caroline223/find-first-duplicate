require 'set'

def find_first_duplicate(arr)
  # type your code in here
 unique_numbers = Set.new

  arr.each do |value|
    return value if unique_numbers.include?(value)

    unique_numbers.add(value)
  end

  -1

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution

# First, I required the 'set' gem to create a set object
# Next, I created the set object which would allow us to store each element of the given array as a unique value
#   and then check to see if it already contains a value using the .includes? method
#  then, I used the .each iterator to iterate over each element within the array to see if there are any matching duplicates
#   if the element is in the set, then we return the value of that element
#   if it is not in the set yet, then we add the element value to the set
# else, after iterating through the array, if each element within the original array does not correspond  
# with any given set value, then we return a value of -1

