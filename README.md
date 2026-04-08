Question 1: Digit Gatekeeper
Approach:
I will run a loop from L to R
For each number:
Check if it is divisible by K
Check that it does not contain digit 0
Find sum of digits
Check if the sum is a prime number
If all conditions are true, increase count
Complexity:
Loop runs from L to R → O(N)
Digit operations are small

Overall complexity is O(N)

Question 2: Roll-Seed Lock
Approach:
Take N and seed
Repeat the process 3 times:
If even → divide by 2 and add seed
If odd → multiply by 3 and subtract seed
After 3 steps:
Check if number is between 100 and 999
Find middle digit and compare with seed
Print YES or NO
Complexity:
Only 3 steps → constant time

Overall complexity is O(1)

Question 3: Mirror Corridor
Approach:
Try values of X from 0 to 100000
For each X:
Add it to N
Check if result is palindrome
Check if divisible by K
First valid X is the answer
If not found, print -1
Complexity:
Loop can go up to 100000
Palindrome check takes small time

Overall complexity is O(N)

Question 4: Fare Calculator
Approach:
Start with base + 7 × distance
Apply conditions one by one:
Add 20 if late
Add 10% if distance > 10
Add or subtract seed based on odd/even
Finally round up to nearest multiple of 5
Complexity:
Only calculations, no loops

Overall complexity is O(1)

Question 5: Skipping Numbers
Approach:
Start from m = 1
Keep adding numbers which are not divisible by (seed + 2)
Keep track of sum
Stop when sum becomes ≥ N
Print m and sum
Complexity:
Loop runs until sum reaches N

Overall complexity is O(N) (approx)

Question 6: Contest Score Judge
Approach:
Calculate score using formula
If score is negative, make it 0
If total attempts > 50, subtract 10
Check:
≥ 60 → PASS
else → FAIL
Complexity:
Simple calculations

Overall complexity is O(1)
