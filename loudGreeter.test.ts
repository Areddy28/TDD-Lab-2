import { Greeter } from "../src/greeter";

import {LoudGreeter} from "../src/loudGreeter"; 

describe("", () => {
test("hi Akhil", () => {
    
    // Arrange
    let hiAkhil = new LoudGreeter("Hi"); 
    
    // Act 
    
    // Assert
    expect(hiAkhil.greet("Akhil")).toBe("Hi, Akhil!!")

})

test("Hey Jim", () => {
    let heyJim = new LoudGreeter("Hey"); 

    heyJim.addVolume(); 

    expect(heyJim.greet("Jim")).toBe("Hey, Jim!!!")
})

}) 