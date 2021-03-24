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

 
 ### Now let’s elaborate on every step



