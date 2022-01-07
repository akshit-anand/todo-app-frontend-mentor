well basically what i did in this app is -

i first created a sampleTask array and then i created task html elements which are task container div, checkbox, task text p tag, span for delete task with the sampleTask array data while iterating sampleTask Array using for/of loop with this it created a sampleTask list

and then i create function of each operation like -

adding new task - in this i use the same for/of loop used in sampleTask list but instead of using sampleTask array i use input text value

delete task - in this i use deletebtn to delete the task by finding its parent element and then remove it
