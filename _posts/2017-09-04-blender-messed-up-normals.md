---
layout: post
title: Getting started with Blender: Messed up normals
---

# In brief

I just started out with (2 months in by now), and my very first model's stomach was not correctly rendered after importing into unity3d.

I tried to recalculate the normals without success.
The *Properties View* in *Object Mode* actually showed a negative scale on the mesh. To fix this, make sure you're into *"Object Mode"* and do the following:
 - Select the mesh
 - *"Ctrl" + "A"*
 - Select *"Scale"* in the *"Apply"* section

Now you're model is inside out, and the normals are showing correctly (they're shown, as unity actually rendered them).  
To fix this, I did this:
 - Select mesh
 - *"Tab"* (go into edit mode)
 - *"A"* (select all)
 - *"Ctrl" + "N"* (same as in the Menu "Mesh" > "Normals" > "Recalculate outside")

... and you're good to go!  
I didn't have the same problem on my second model anymore, since I was a little more careful using the scale-tool, to avoid having a negative scale again.

------------------------------

# The long story

After many years of not being motivated enough, I finally started with game development - sort of...
I followed some tutorials to create a low poly character model in blender.

Personally I started with a tutorial from Karan Shah, which is well worth checking out: https://cgi.tutsplus.com/tutorials/creating-a-low-poly-ninja-game-character-using-blender-part-1--cg-16132

His explanations are fantastic and with a little patience it's really easy to follow every step he documented there.

While following this tutorial I must've messed up pretty badly. I didn't realize while modelling, but after importing my model into unity3d, I only saw the faces on the other side of my model. In other words: the belly was see-through, and I saw the inside of my characters back...

![ Model in blender - everything seems ok ]({{site.url}}/assets/blender/01_base_model.png)

![ My model in unity ]({{site.url}}/assets/blender/01_unity_mess.png)

## Messed up normals

After some internet research I read something about *"normals"* - great, another new topic in this whole mess of words I already don't understand...
Very simply put *"Normals"* show, which side of a surface is visible (please read about this on the internet rather than rely on what I'm telling).  
The steps they suggested were the following:
 - select your messed up mesh
 - *"Tab"* (go into object mode)
 - *"A"* (select everything)
 - *"Ctrl" + "N"* (same as in the Menu "Mesh" > "Normals" > "Recalculate outside")

You can show the normals of your model in the properties view (hit "N" and it will show up on the right side of your current "3D view" editor) under "Mesh Display" in edit mode. Click the Cube with the highlighted surface and increase the normals size. You should see blue lines coming out of every face of your model now.

![ very long normals for demonstration purposes ]({{site.url}}/assets/blender/02_base_model_normals.png)

Even though this has helped many others, it still did not solve my problem. Everything seemed fine in blender, but the imported model was still messed up in unity3d (just a little different from before).

![ still messed up - visible at the shoulders and hair ]({{site.url}}/assets/blender/02_unity_fixed_normals1.png)

## Negative scale values

After quite a while of experimenting, I eventually found what solved my problems.
In Object view, hit *"N"* again to bring up the Properties and on the very top you'll find the *"Transform"* section. The *"Scale"* values were set to something below 0 (-0.271 or whatever).

![ negative scales on body mesh ]({{site.url}}/assets/blender/03_base_model_scales.png)

To solve this, I did the following:

 - Go into *"Object Mode"*
 - Select the model
 - *"Ctrl" + "A"* > Click *"Scale"* in the *"Apply"* section

This then applied the negative scales I somehow created on my model; the result was my exact model, just inside out. Seeing this, I kinda got a grasp of why unity displayed my model as it did...

![ the mesh inside out ]({{site.url}}/assets/blender/04_base_model_applied_scales.png)

![ what the normals looked like now ]({{site.url}}/assets/blender/05_base_model_messed_up_normals.png)


After all scales in the "transform" section from before were now been magically set to 1, the normals of my model we're now actually pointing to the inside.
I followed above steps (Edit mode > *"A"* > *"Ctrl" + "N"*) and finally got a model that properly rendered in unity as well!

![ fixed the normals ]({{site.url}}/assets/blender/06_base_model_fixed_normals.png)

![ ...and imported into unity once more ]({{site.url}}/assets/blender/06_unity_fixed.png)

For any intermediate or expert users: Please forgive my ignorance, I'm still a total beginner ;-) I'd be grateful for any corrections, suggestions and tips!
