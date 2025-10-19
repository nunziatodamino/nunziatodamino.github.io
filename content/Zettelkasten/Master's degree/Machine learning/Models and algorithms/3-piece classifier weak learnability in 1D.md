Consider the following class:

$$ H_{\vartheta_1, \vartheta_2, b} = \{h_{\vartheta_1, \vartheta_2, b}(x) : \vartheta_1, \vartheta_2 \in \mathbb{R}, \vartheta_1< \vartheta_2, b \in \{-1, +1\} \} $$

Where:

$$ h_{\vartheta_1, \vartheta_2, b}(x) = 
\begin{cases}
-1 \quad \text{if}\ \vartheta_1 \leq x \leq \vartheta_2 \\
+1 \quad \text{otherwise}
\end{cases} $$

An example hypothesis of this class ($b = 1$) is the following:

![[Images/3-piece classifier weak learnability in 1D.png|400]]

We will prove that this class is $\gamma$-weak learnable via another hypothesis class (so improper weak learning).
Consider the decision stump class in 1D:

$$ B = \{ x \to \text{sgn}(\vartheta -x)b : \vartheta\in \mathbb{R}, b \in \{-1, +1\} \} $$

Now we show that $\text{ERM}_B$ is a $\gamma$-weak-learner for $H$, with $\gamma = 1/6$.
### Proof (Optional)

Consider the definition of [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Weak learnability|Weak learnability]]. Consider that the example in $H_{\vartheta_1, \vartheta_2, b}$ we chosen is a target that labels perfectly a training set $S$.
Consider than a stump with $b = -1$ and $\vartheta =\vartheta_1$. Consider that there are $a_+$ samples in the first region, $b_-$ in the second and $c_+$ in the third, such that : $a_+ +b_- +c_+ = m$.
This choice has an error $b_ - / m$, as only the mid section is mislabeled.
Supposing that $b_-$ is the minimum of the 3 samples, then $a_+ +b_- +c_+ = m > 3b_-$ leading to the consideration that the error is $b_ - / m \leq 1/3$.

Using then the definition of weak learnability : $1/3 = 1/2 -\gamma \iff \gamma = 1/6$