package main

import (
	"fmt"
)

func eachConst(arr []int, sizeSubsetNumber int) [][]int {
	var result [][]int

	// calcular cuántos subarrays se pueden formar
	for i := 0; i <= len(arr)-sizeSubsetNumber; i++ {
		subset := arr[i : i+sizeSubsetNumber]
		result = append(result, subset)
	}

	return result
}

func main() {
	numbers := []int{1, 2, 3, 4}

	fmt.Println(eachConst(numbers, 2))
	fmt.Println(eachConst(numbers, 3))
}
