"""

Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

Example
arr = [1, 1, 2, 2, 3]

There are two each of types 1 and 2, and one sighting of type 3.
Pick the lower of the two types seen twice: type 1.

"""

def migratoryBirds(arr):
    birds_dict = {}

    for bird in arr:
        if bird in birds_dict:
            birds_dict[bird] += 1
        else:
            birds_dict[bird] = 1

    max_birds = []
    max_times = 0
    items = birds_dict.items()
    for bird_id, times in items:
        if times > max_times:
            max_times = times
            max_birds = [bird_id]
        elif times == max_times:
            max_birds.append(bird_id)

    return min(max_birds)

migratoryBirds([1, 4, 4, 4, 5, 3]); # 4
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]); # 3

# AI

from collections import Counter
from typing import List

def migratoryBirds(arr: List[int]) -> int:
    counts = Counter(arr)
    max_count = max(counts.values())
    return min(bird for bird, c in counts.items() if c == max_count)
