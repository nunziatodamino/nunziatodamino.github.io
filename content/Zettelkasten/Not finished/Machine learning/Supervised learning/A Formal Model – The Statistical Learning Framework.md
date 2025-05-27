Suppose I want to solve the following learning problem: (from Shalev-Shwartz, Shai, & Ben-David, Shai,
Understanding machine learning: From theory to algorithms, Cambridge University Press, 2014)

In a foreign country, in which papayas are a renowned good, I want to learn (or a machine wants to learn, note that the anthropization of the problem better helps in understanding in the beginning) what characteristics makes a papaya taste good.
So, knowing that generally quality of fruits are dependent on color, feel and shape, I start buying and eating papayas and classifying them accordingly. Then if they are tasty I put on them a label, say 1, if they are not I put them another label, say 0.

Now we formalize the problem, starting on the **learner's input**, i.e. what the learner, human or machine, knows.

- The learner has access to a **domain set $X$**. Usually, these domain points will be represented by a vector (or tensor) of features . We also refer to domain points as instances and to $X$ as instance space.
	 In our example the domain set is the set of all possible papayas on the market. The specific features of each papayas are the one chosen a priori for the classification, in our case color, feel and shape

- The learner has access to a **label set $Y$** used for the classification
	 In our example $Y = \{ 0, 1\}$ where 0 means not tasty and 1 means tasty

- The learner has access to a **training set $S$**. This set is of the type: $S = \{(x_1,y_1),\dots, (x_n,y_n)\}$ which is a finite sequence in $X \times Y$. Such labeled examples are often called training examples or training data.
	 In our example is the subset of tasted papayas to which we put a label on .


We continue by stating what is the **learner's output**,  i.e. how the learner, human or machine, wish to achieve the learning goal.

- The learner is requested to output a **prediction rule**, of the type $h : X \to Y$ so that we can classify objects that are not part of the training set.
	 In our example a possible prediction rule can be that when a papaya is 15 cm wide, red and not too mushy it will be tasty
