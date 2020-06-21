



```
function create(data){
    fetch("https://crudcrud.com/api/<ID>/routes", {
    headers: {
        "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(data)
    })
}
```

```
new Array(10).fill('0').forEach(ele =>{
    create({
        
    "date": faker.date.future(),
    "duration": faker.random.number(),
    "origin": faker.random.arrayElement(["TLV", "JFK", "MDX", "LHR", "VIE", "4N1", "EWR", "LAX", "MIA"]),
    "destination": faker.random.arrayElement(["TLV", "JFK", "MDX", "LHR", "VIE", "4N1", "EWR", "LAX", "MIA"]),
    "airline": faker.random.arrayElement(["LY", "AA", "DL", "LHR", "VIE", "4N1", "EWR", "LAX", "MIA"]),
    "aircraft": faker.random.arrayElement(["B789", "B773", "B744", "B748"]),
    "status": faker.random.arrayElement(["scheduled","canceled"])
    "connectionId": "OOO-DDD"

    })
})
```