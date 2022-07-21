# README_Generator 

## Description
This application is run in the terminal and used to generate README files based on user input and selection of criteria. 

Below is a video demo on how the application is used.
https://user-images.githubusercontent.com/105050107/180178861-70d6ca51-4c5f-421e-99f2-e15f87f8a0ad.mp4
In case the above video does not work, please use [this link](https://drive.google.com/file/d/1klkf_0FpcgkR5JVpuw8wr9nYB9a2SkAY/view?usp=sharing)

The generated file in VS Code:
![generated_readme](/assets/images/generated_readme1.png)

The generated file is named newREADME.md for the purposes of displaying the correct README for this application on GitHub. If a user wanted to generate README.md using the application, then they must switch the fileName in the fs.writeFile function on line 59 of index.js.
To see the generated README, please click this [link to navigate to newREADME.md](/newREADME.md) or refer to this picture:
![generated_readme_on_GitHub](/assets/images/generated_readme.png)

## Technologies Used
This application runs JavaScript through Node.js and employs the inquirer package.

