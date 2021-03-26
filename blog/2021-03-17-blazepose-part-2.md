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
  <i> From tools , choose AVD Manager </i>
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

*P.S. We choose Nesus 5 if you have a reason to pick another one , go on.*

>**To determine your virtual device's hardware capabilities**, Click on "New Hardware Profile" as shown in the previous figure. Then determine the hardware capabilities of your Android Virtual Device .

One of the options is the Camera. To enable the camera, select one or both options:

* Back-Facing Camera - where the lens faces away from the user.
* Front-Facing Camera -where the lens faces toward the user.

![i12](img/configure-hardware.jpg)

<div align="center" >
  <i> Configure Hardware Profile </i>
</div>

Now click "finish", and then hit the "Next" button to complete your Virtual Android Device settings.

>**Tip**: If you are willing to understand more about Android Virtual Device aka understanding why we are doing these steps , I highly recommend [this resource .](https://developer.android.com/studio/run/managing-avds)

>**To select your System image**, you will find that system images are divided into three categories : **Recommended , x86 Images, and other images.** However, let's give a brief definition of system image before choosing one

Android system images are just versions of Android that you can run on a computer. So if you wanted to test a certain version of Android, you could download and run it on the emulator to see what this Android version is like. Or if you wanted to test your app against it to check if your app runs smoothly on it.

Now the category of system image we will select is **"x86 image"**, especially we have chosen **Nougat** with API Level :25, ABI:x86_64 ,and Target Android 7.1.1 . It represents Android Open Source Project (AOSP) system image.

![i13](/img/Figure-16.jpg)

<div align="center" >
  <i> x86 Images </i>
</div>

We would like to justify why we have chosen this category of system images . *That is why the next three paragraphs will be dedicated for that purpose. You can skip them if you are not interested .*

### Here is the definition and usage of every category:

* **Recommended**

They contain access to Google Play services and they are labeled with Google APIs. The main advantage is that they provide convenient button for updating Google Play services on the device. However, this advantage comes with a price which is to ensure app security you cannot get elevated privileges root with these images. For example, you cannot directly upload files to your AVD's external storage. That is why we did not prefer this option at the beginning.

* **x86 Images** 
This category of system images is more general. It contains images with Google Play services and others which are Android Open Source Project (AOSP) system images .If you require elevated privileges (root) to aid with your app troubleshooting, you can use AOSP system images .That is why we picked this type of system images to give us this troubleshooting freedom.

* **Other Images**
This tap includes all previous types in addition to Deprecated and out of date ones. That is why we did not prefer this option.

>**To verify the configuration**, *You need to specify the AVD Name. If you wish to use your host computer webcam or built-in camera, then choose the type of front and back camera to be Webcam0.Click on Finish*.

![i14](/img/Figure-17.jpg)
<div align="center" >
  <i> Verifying AVD Configurations </i>
</div>


"Congratulations for Creating your Android Virtual Device !"

### For the Sixth step :

To open the Run/Debug Configurations dialog, select **Run > Edit Configurations**. The **Run/Debug Configurations** dialog appears, kindly choose them to be as illustrated in the following Figure.

![i15](/img/Figure-19.jpg)
<div align="center">
<i> Appropriate Run/Debug Configurations </i>    
</div>

### For the Seventh step :

To run the app, Pick the Name of AVD you have created. E.g. Nexus 5X API 25.

![i16](/img/Figure-20.jpg)
<div align="center">
<i> Pick the Name of AVD  </i> 
</div>

Then, make sure that you open this file in Android studio: “mlkitmaster\mlkitmaster\android\visionquickstart\app\src\main\java\com\google\mlkit\vision\demo\java\CameraXLivePreviewActivity.java

Finally, Click the green arrow as illustrated on the following image or hit Shift+F10 buttons.

![i17](/img/Figure-21.jpg)
<div align="center">
<i> Run the app </i>
</div>

### For the Eighth Step:

> *Let’s deal with ML Kit’s easy-to-use interface*

Now if everything is okay, you will find the following screen appear on your
AVD a. It asks you to choose which programming language you will prefer to run the app with. Personally, we have chosen Java. **If running your app results in error. Kindly, refer to the next part of this article series where we talk about some technical errors that run into us and how we have solved them.**


Now you can choose to run the app on live camera or still images. We have chosen “StillImagesActivity” as we needed to insert static images and run the app on them.

![i18](/img/Figure-22.jpg)

<dev align="center">
<i>Left Figure: ML Kit interface.    
 </i>
</dev>
  

<dev align="center">
<i> Right Figure : Infer the model on static images, choose the second option 
 </i>
</dev>
   

Since we want to try BlazePose for pose detection, click on the arrow as illustrated on the following image and choosing **Pose Detection**. It will ask you if you want to **choose images from album** or in other words from your Android Virtual Device storage **or take image** using your host computer’s webcam. As we have already uploaded images to test on AVD’s storage, we have chosen to select image from album.

![i19](/img/Figure-23.jpg)

<dev  align="center">

<i>
Left Figure : Pose Detection
</i>
</dev>

<dev  align="center">
<i>
Right Figure : Choose Select image from album 
</i>
</dev>


Now you can choose images from your AVD internal storage or external
storage.

If you do not know how to upload images to your AVD’s storage nor how to view them. **Kindly follow us to get notified when the third part of this article series is available where we explain how to upload images and overcome the problem of not being able to view them on AVD.**

Once you have chosen the image , you will find that the model has been applied on it and you will see body keypoints illustrated in white as in the following image.

### **Congratulations…..You have Earned it .. Here is the Final step where we view the Results**

![i20](/img/Figure-24.jpg)
<dev  align="center">
<i> Apply the model on the image. </i>
</dev>

### BlazePose's Results:

Now let’s view more examples of Blazepose’s performance for full body keypoints Extraction.

![i21](/img/Figure-25.jpg)
<dev align="center">

<i> BlazePose’s Results </i>

</dev>

### Conclusion:

**In this part** , we have illustrated the exact steps you need to do to try/infer through Blazepose for full body pose estimation. **In the next part** , we will view some of the errors which there is a chance to encounter and how to solve them. So you may want to follow us to get notified when the next part is out.
