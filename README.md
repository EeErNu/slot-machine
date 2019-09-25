# Test Task - 4 hours

Since I found out about this task today at 8 am (***was in a junk mail folder***) I tried to complete it as fast as possible. The task is not completed, yet I have decided to send it to you just in case.

Technically, it is not forbidden by the task description to use third-party libraries like https://josex2r.github.io/jQuery-SlotMachine/ . The only requirement was the code to work in Chrome browser.

However, I have decided to do everything in pure js to show what I can create with it and give you a basic understanding of my skills.  

# Problem

Was not able to finish the task due to bad strategy I have used.

Since I had to complete everything super fast(had 4 hours until the deadline) I have decided to focus on reel animation first. I made a sprite of all the images you have provided in the order you required. Made a simple sprite animation  

After that focused on the spinning button, adding credits and showing them to the user. 

Later, when was about to make a winning condition solution I realized that part of spinning implementation is wrong. Because of that, I have seen no fast and easy way to finish the task.

Below I will try to describe the solution I see right now:
I must not have created a sprite. The better way would be to combine images you have provided in a different way so they would be separate. 

I should have create an object: 

```
let Images = function(name, src) {
    this.name = name;
    this.src = src;
}
```
And use inheritance 
```
const BARx3 = new Images("3xBAR", "assets/img/3xBAR.png");
const BAR = new Images("BAR", "assets/img/BAR.png");
const BARx2 = new Images("2xBAR", "assets/img/2xBAR.png");
const SEVEN = new Images("7", "assets/img/7.png");
const CHERRY = new Images("CHERRY", "assets/img/Cherry.png");
```
So evey image would have its own naming. After that I would had to create a winning conditions with a switch/case something like that:

```
    switch (winConditions) {
        case SEVEN + SEVEN + SEVEN:
            CURRENT_CREDIT.innerHTML + 150
        case BARx3 + BARx3 + BARx3:
            CURRENT_CREDIT.innerHTML + 50
        case BARx2 + BARx2 + BARx2:
            CURRENT_CREDIT.innerHTML + 20
        case BAR + BAR + BAR:
            CURRENT_CREDIT.innerHTML + 10
            break;
        default:
            break;
    }
```
, where the numbers are the points to be granted for the combination.

Regarding top/middle/bottom win lines - I have not created any nice ideas on how would I implement this, but in combination with the above example solution that would be easier than with the one I currently have.

# Comments to Task Paragraphs 

## Detailed description

1. reels - done
2. pay-table - done   
3. balance indicator (text-box) - done
4. SPIN button - done
5. Debug area - no

### Reels

The reel is spinning but no top/middle/bottom win lines. That was a mistake of my planning.  

A bug: when pressing spin button for the first time the reels go left.

### Pay-table

It is there.

### Balance area

It is there.

### Spin button

It is there. 
During the spinning, the user CAN press spin again = Not due to requirements. 

The spinning time is 2 sec. 

The Reels finish at the same time = Not due to requirements. 

### Debug area

Debug is not implemented.

## General guidelines

Pure js. Pure css. Minimal requirements are not done.    

## Provided assets

Combined the images into one sprite. Used one external .gif file.

## Packaging requirements

I was not provided by a link to the FTP site. Nor in the archive, nor in the email I was able to find it. 
