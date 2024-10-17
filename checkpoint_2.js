function insertion_sort(t) {
    for (let i = 1; i <= t.length-1; i++) {
        var v = t[i]
        var j = i-1
        while (j>=0 && t[j]>v) {
            t[j+1] = t[j]
            j--
            
        }
        t[j+1] = v
    }
}
var t = [5,6,8,2,1,9,0,7,3]

insertion_sort(t)

console.log(t)