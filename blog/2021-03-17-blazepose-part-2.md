---
slug: blazepose-part-2
title: BlazePose for Full Body Keypoints Extraction.
author: Alaa Hesham
author_title: Machine Learning Engineer @ VRapeutic
author_url: https://www.linkedin.com/in/alaa-hesham-a6671b112/
author_image_url: https://miro.medium.com/fit/c/262/262/1*HYIF3GGs-BXlAjHXJNe-dA.png
tags: [computer-vision, research, pose-estimation,virtual reality]
---

A technical guide that shows the exact steps you need to do.

![MrWentworth](https://miro.medium.com/max/2400/1*QveuIkCz7bYYp1_NjMicQw.jpeg)

:::note

You can check out the [Original Medium Article](https://alaa-hesham.medium.com/blazepose-for-full-body-keypoints-extraction-dc92a5bcdeb0) here.

:::

BlazePose is a model that extracts body keypoints from a single image. It exactly infers 33, 2D landmarks of a human body from a single frame such as shoulders, elbows, and knees as illustrated in the previous figure . **To know more about what it is**, how its performance is revolutionary compared to its counterparts, and how to use it for upper body pose estimation , **Kindly refer to [this article](https://vrapeutic.github.io/blog/blazepose-part-1)** . It represents the first part of BlazePose’s article series.

In this article , which represents the second part of BlazePose’s article series , we will illustrate **the exact technical steps you need to do to try/infer through Blazepose for full body pose estimation .**

>It is worth mentioning that currently, Jan 2021, the full body is only available on Android and iOS through ML Kit API.

[ML kit](https://developers.google.com/ml-kit) is a mobile SDK that brings Google’s machine learning expertise to Android and iOS apps in a powerful yet easy-to-use package. It is main advantage is that you can implement the functionality you need in just a few lines of code. So where the challenge lies ?

The challenge lies in being quite newbie in mobile development such as Android Development. In this tutorial/article, we will walk you through how to try ml kit with no need to have any previous experience in Android development.

:::note

 This Article is a part of a technical research project that has been conducted by R&D department at Yuram. Yuram is a product of VRapeutic– a software company specialized in therapeutic applications based in Egypt.

 :::

### Here are the steps you need to do summarized, we will then unfold each step clearly and in a great detail:

* **First**, download and set up Integrated Development Environment (IDE) for Android app development .

* **Second**, install some components such as SDKS and Android Emulator on your IDE that you will need later on.

* **Third**, download “ML kit API” code of their quick start app in Android.

* **Fourth**, go to the file where you can run the app.

* **Fifth**, create your Android Virtual Device to run the app on . This step involves many stages where you need to : *Choose your device definition , determine your virtual device’s hardware capabilities such as camera, select a system image , and finally verify the configuration.*

* **Sixth** , edit your “run/debug configuration”.

* **Seventh** , pick your Android device and hit “run”button.

* **Eighth** , dealing with ml-kit interface.
* **Finally**, showing BlazePose’s results .

 
 >## Now let’s elaborate on every step

### For the first step:
We need to download and set up Integrated Development Environment (IDE) for **Android** app development.**Android Studio** is the official integrated development environment (IDE) for Google’s Android operating system. I highly recommend to download and set up android studio using
[this tutorial](https://www.youtube.com/watch?v=0zx_eFyHRU0&t=3s).

![i5](/img/Figure-9.jpg)

<div align="center" >
  <i> Android Studio Components’ installation </i>
</div>

After finishing this tutorial, you now have made your “hello world” project in Android studio.

### For the second step :

We are up to install some components such as SDKS and Android Emulator on your IDE that you will need later on. That is why **you need to ensure that the following components are available on your Android studio** by installing them if they are not installed yet.

* Android SDK Build-Tools
* Android Emulator
* Android SDK Platform-Tools
* Android SDK Tools
* Intel X86 Emulator Accelerator

IF you are asking how to check or install them , **from Tools >SDK manager. >Android SDK>SDK Tools.**

>The following figures show where these orders lie in Android Studio Interface.

![i6](/img/Figure-10.jpg)
<div align="center" >
  <i> GO to tools ,then click on SDK Manager </i>
</div>

![i7](/img/Figure-12.jpg)
<div align="center">
<i>Click on Android SDK , then pick SDK Tools, select the highlighted components , finally click OK.</i>
</div>

![i8](/img/Figure-11.jpg)
<div align="center" >
<i> Now switch to SDK Platforms , you may want to pick “Android 7.1.1(Nougat)” to be your SDK Platforms </i>
</div>

### For the third step :

Now we are going to download “ML kit API” code of their quick start app in Android. **In ML kit github repository, you can find a quick start app** where you can run/infer through the model with no need to write even a single line of code. Download the code from [here](https://github.com/googlesamples/mlkit).

### For the fourth step :
Now we want to go to the file where you can run the app. **Open the project using Android studio , go to the following file to run the app**: mlkit-master\mlkit-master\android\vision-quickstart\app\src\main\java\com\google\mlkit\vision\demo\java\CameraXLivePreviewActivity.java

This is the activity file. An **activity** file represents a single screen with a user interface to interact with. If you have worked with C, C++ programming language, then this file is like your main() function.

### For the fifth step :
> Now you need to create the Android virtual device (AVD) you will run your app on. Remember that ml kit is a mobile SDK. As a result, if you want to run it on your pc/laptop, you will need to install Android Emulator as we did in the second step as well as creating virtual android device with capabilities that allow you to test the app on.

As we highlighted before this step involves many stages where you need to:

1. Create your virtual device .
2. Choose your device definition .
3. Determine your virtual device’s hardware capabilities.
4. Select a system image .
5. Finally verify the configuration .


> **To create your virtual device** , from tools >AVD manager :

![i9](img/Figure-13.jpg)

<div align="center" >
  <i> Android Studio Components’ installation </i>
</div>

Click on “Create Virtual Device”

![i10](img/Figure-14.jpg)

<div align="center" >
  <i> Create Virtual Device </i>
</div>

> **To choose your device definition**, Click on Phone tab >Nesus 5>click on New Hardware Profile.

![i11](img/Figure-15.jpg)

<div align="center" >
  <i> Device Definition </i>
</div>

