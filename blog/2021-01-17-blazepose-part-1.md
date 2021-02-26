---
slug: blazepose-part-1
title: BlazePose, the Best Model for Body keypoints Extraction [Revolutionary]
author: Alaa Hesham
author_title: Machine Learning Research @ VRapeutic
author_url: https://alaa-hesham.medium.com/
author_image_url: https://miro.medium.com/fit/c/262/262/1*HYIF3GGs-BXlAjHXJNe-dA.png
tags: [computer-vision, research, pose-estimation]
---

A comprehensive technical guide on how to extract human body keypoints using BlazePose for Human Pose Estimation.

:::note

You can check out the [Original Medium Article](https://alaa-hesham.medium.com/blazepose-the-best-model-for-body-keypoints-extraction-efdad71d74e2) here.

:::

![key-points](https://miro.medium.com/max/2400/1*KRzZd1ofbP-FMWj1MPrvhQ.jpeg)

## What is BlazePose?

BlazePose is a model that extracts body keypoints from a single image. It exactly infers 33, 2D landmarks of a human body from a single frame such as shoulders, elbows, and knees as illustrated in the following figure. The user’s face must be in the image to detect the pose. To have the best results, the person’s entire body should be in the image. Google researchers have provided this human pose perception functionality to the broader research and development community to encourage the emergence of creative use cases, and stimulate new applications and research avenues.

> Its edge is that it is more suitable for applications like fitness ,rehabilitation and dance than already existing models. Why? It is more accurate. It also localizes more keypoints than other previous models do to be more suitable for applications where the scale and orientation of hands and feet are vital information.

For more theoretical information about BlazePose model, check [Google AI Blog here](https://ai.googleblog.com/2020/08/on-device-real-time-body-pose-tracking.html).

![key-points-2](https://miro.medium.com/max/2400/1*-5YeZDrwsfHCGmOj8NFOsg.jpeg)
*Body keypoints that BlazePose detects*

*In this part of **Blazepose’s article series**, we will cover the following points:*
- How BlazePose’s performance exceeds already existing models such as PoseNet ?
- How to easily try/infer through Blazepose for upper body pose estimation ?

*In the **second part**, we will explain:*
- The exact steps you need to do to try/infer through Blazepose for full body pose estimation. It is worth mentioning that currently the full body is only available on Android and iOS through ML Kit API.
- ML kit interface and how to use it ?

*In the **third part**, we will discuss:*
- Some of technical problems and how to troubleshoot/solve them ?

:::note

This Article is a part of a technical research project that has been conducted by R&D department at Yuram. Yuram is a product of VRapeutic– a software company specialized in therapeutic applications based in Egypt.

:::

## How its performance exceeds already existing models such as PoseNet?

Before trying BlazePose for pose estimation, **we have tried other models such as PoseNet**. According to literature review, PoseNet is one of the best models that existed before the appearance of BlazePose. So let’s see how BlazePose enhanced the performance of some cases where PoseNet does not manage to achieve good nor reliable results.


We have noticed that PoseNet tends to have a good performance when the picture is zoomed out as in Figure 3 . However, it performs quite poorly when the subject person in the image is near as in Figure 2 and 4 even if the image is of good quality and resolution. It also does not manage to produce some body keypoints when the subjects’ clothes are fluffy such as in Figure 5.

![i1](/img/key-pts-1.png)
*(Left) PoseNet could not extract keypoints when image size is that big. (Right) PoseNet managed to extract keypoints when image becomes of lower
size and zoomed out.*


![i2](/img/key-pts-2.png)
*(Left) PoseNet does not manage to extract all body keypoints even that the image is
of good quality. (Right) When person’s clothes are fluffy, it did not manage to detect all body
key points.*

**Now let’s see how BlazePose performs on these
images.**

![i3](/img/key-pts-3.png)

Apparently, its performance is superior comparing to its current counterpart. **Disclaimer**, keypoints appear in white color but we changed their color to green. The reason is to make them clearer definitely with the same exact position and orientation.

## How to try BlazePose ?

Although pose estimation for **upper body** is supported on many platforms such as Android, iOS, Desktop, Python, and Web. **The full body is supported only on Android and iOS. Other platforms support upper body only**. (This is the current situation in Jan 2021)

## How to easily try/infer through Blazepose for upper body pose estimation ?

To try BlazePose performance on the upper body, the easiest way is
through Python notebook developed by MediaPipe. *Mediapipe is an open source framework to build word-class machine learning solutions by Google*.

### In simple terms, do the following steps:

1. Go to the following [Colab notebook](https://colab.research.google.com/drive/1uCuA6We9T5r0WljspEHWPHXCT_2bMKUy)

2. From File menu, choose Save a copy In Drive

![i8](https://miro.medium.com/max/700/1*05wWwL3XCdcMtRKmefzB3g.png)

3. Go to the copied notebook, run the first cell. In the second cell, run it and
click on choose Files button to choose the image you want to try the model
on.

![i9](https://miro.medium.com/max/430/1*Cynj7U08HJOQcSnkTPFKHw.jpeg)

4.  Keep running the following cells, finally you will get the input image
annotated with upper body keypoints.

![i4](/img/key-pts-4.png)

*The left image represents the input image while the right image represents the annotated output image.*

## Conclusion

In this Article, we have just illustrated what is BlazePose, how its performance is revolutionary compared to its counterparts, and how to use BlazePose for upper body pose estimation. **For Full Body Pose Estimation/Keypoints Extraction, kindly follow us to get notified when the second part is available where we explain the exact technical steps you need to do.**
