BladeGame
=========

This repository will contain all of the code for a series of articles I'm writing on HTML5 game development using the [Blade C# to JavaScript compiler](https://github.com/vannatech/blade).

## Demos ##
You can access the demos [here](http://ventajou.github.com/BladeGame/Web/).

## Where can I find the articles? ##
On BuildNewGames:

* [Compiling to JavaScript: What, Why, and How?](http://buildnewgames.com/compiling-to-javascript/)

## Code organization ##
The master branch will contain the most up to date code, while there will be a branch for each article in the series. For example, the article\_1 branch will contain all of the code pertaining to the corresponding article. As each article will build on top of the previous one, so will the branches. For example, article\_2 will be article\_1 plus new or modified code.

The code is organized in folders, in the following manner:

- Framework: contains the source of a sample game framework or engine with the common components used by the various demos and games.
- Demos: gathers all of the various demos and sample games that will be created to illustrate the various topics covered in the articles.
- Web: the simple website used to host the [demos](http://ventajou.github.com/BladeGame/Web/).

## Building the code ##
To build the code, you will need a Windows computer with the .NET Framework v4.0 or better. In addition, you will need to install the [Blade compiler](https://github.com/vannatech/blade).

**Note: For the time being, the Blade installer requires Visual Studio 2010 to be installed, I'm working with the author to address that.**

These should be enough for you to build from the command line, using the MSBuild tool:

	msbuild BladeGame.sln

MSBuild can be found hidden in the depth of the Windows directory in the .Net Framework folder, for example:

	C:\WINDOWS\Microsoft.NET\Framework\v4.0.30319

But if you're like me, you'll prefer to use an IDE to develop and build, for that you have a few choices:

- Visual Studio 2012 or 2010.
- [SharpDevelop](http://www.icsharpcode.net/OpenSource/SD/), which is an excellent open source IDE written in .NET.

Note: Visual Studio Express and MonoDevelop are currently not supported but you may be able to get them to work with some tweaking.

## License ##

Copyright 2012 André Rieussec

Licensed under the Apache License, Version 2.0 (the "License");
you may not use any file in this project except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.