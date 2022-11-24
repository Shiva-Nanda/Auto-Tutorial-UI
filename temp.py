import heapq

def solve(cur, k, given, taken):
    ini = cur
    n = len(taken)
    l = []
    for i in range(n):
        l.append((taken[i], given[i]))
    l.sort()
    pq = []
    i = 0
    ans = 0
    while i < n and k != 0:
        if l[i][0] < cur:
            heapq.heappush(pq, -l[i][1])
            i += 1
        else:
            if len(pq) == 0:
                break
            cur += -heapq.heappop(pq)
            k -= 1
    while k > 0 and len(pq) != 0:
        cur += heapq.heappop(pq)*-1
        k -= 1
    return cur
    
print(solve(6, 4, [5,5,2,1,7,9,6,6], [3,6,9,2,0,3,0,2]))