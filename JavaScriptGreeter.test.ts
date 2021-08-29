import {JavaScriptGreeter} from "../src/JavaScriptGreeter"; 

describe("", () => {
    test("", ()=>{
        // arrange 
        let harsh = new JavaScriptGreeter("Welcome"); 
        
        // assert 
        expect(harsh.greet("Harsh")).toBe("console.log(Welcome, Harsh!)"); 
    })

    test("Hello Bob", () => {
        // Arrange 
        let helloBob = new JavaScriptGreeter ("Hello")

        //Act 

        //Assert 
        expect(helloBob.greet("Bob")).toBe("console.log(Hello, Bob!)") 
    })
})