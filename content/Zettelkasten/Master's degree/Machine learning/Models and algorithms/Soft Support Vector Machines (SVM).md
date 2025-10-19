The [[Zettelkasten/Master's degree/Machine learning/Models and algorithms/Hard Support Vector Machines (SVM)|Hard-SVM]] formulation assumes that the training set is linearly separable (i.e. by implying implicitly realizability), which is a rather strong assumption. Soft-SVM can be viewed as a relaxation of the Hard-SVM rule that can be applied even if the training set is not linearly separable.

![[Images/Soft Support Vector Machines (SVM).png]]

The idea is simple, to allow some data to be misclassified or to cross the margin and to quantify by how much by introducing the slack variable.
For each data point we define a slack $\xi_i \geq 0$ in this way:

- $\xi_i = 0$ if the variable is correctly classified and outside the margin
- $0<\xi_i \leq 1$ if the variable is correctly classified and inside the margin
- $\xi_i > 1$ if the variable is misclassified and outside the margin

Then the soft-SVM rule, other than maximizing the margin as we saw in the hard-SVM in the homogeneous case, adds a penalty for the slack present:

![[Images/Soft Support Vector Machines (SVM)-1.png|500]]

### Comparison with Hard-SVM

In order to compare it with Hard-SVM the rule is often rewritten as:

$$\min_{\bar w,b,\ \xi\ge 0}\left( \|\bar w\|^2+\frac{C}{m}\sum_{i=1}^m \xi_i\right) 
\quad\text{s.t.}\quad y_i\big(\langle \bar w,\bar x_i\rangle+b\big)\ge 1-\xi_i $$

Where $C = \frac{1}{\lambda}$. 
First note that if the data is linearly separable than $\exists \bar{\xi} : \xi_i = 0, \forall i$ , but is not guaranteed that the rule picks it.
In the limit $C \to +\infty$ (or $\lambda \to 0^+$) (i.e. adding an extreme penalty to the present slacks) then if the data is separable the rule becomes the hard-SVM rule. (this is overkill, it can happen even with high enough $C$).
In case of non separability, even in this limit, the rule will pick another minimizer, but not the hard-svm rule.

in general with low $C$ we have a looser separation with more misclassifications (towards the soft), while with high $C$ the separation will be sharper with less misclassifications (towards the hard)
But even this can be not true as we see in the picture:

![[Images/Soft Support Vector Machines (SVM)-2.png|300]]

**Rule of thumb — $C$ vs. margin (SVM)**

- **Setup.** Under the standard scaling $y_i(\langle \bar w,\bar x_i\rangle + b)\ge 1-\xi_i$,
  the geometric margin is $\gamma=\frac{1}{\|\bar w\|}$.  
  A common parametrization is $C=\frac{1}{\lambda}$ in the objective
  $|\bar{w}|^2+\frac{C}{m}\sum_i \xi_i$ (conventions vary by text).

- **Non-separable / noisy data**
  - $C \uparrow$ (heavier slack penalty, **weaker** regularization)
    $\;\Rightarrow\;$ fewer violations, typically $\|\bar w\|\uparrow$
    $\;\Rightarrow\;$ $\gamma\downarrow$ (narrower margin).
  - $C \downarrow$ (lighter slack penalty, **stronger** regularization)
    $\;\Rightarrow\;$ more violations, typically $\|\bar w\|\downarrow$
    $\;\Rightarrow\;$ $\gamma\uparrow$ (wider margin).

- **Separable data**
  - $\exists\,C_\star>0$ such that $\forall\,C\ge C_\star$ the optimal slacks satisfy $\xi_i^\star=0$
    and $(\bar w^\star,b^\star)$ **equals the hard-margin (max-margin) SVM**.
  - Increasing $C$ beyond $C_\star$ leaves the solution unchanged.

**Heuristic.** Large $C$ $\Rightarrow$ “harder”: narrow margin, few violations.  
Small $C$ $\Rightarrow$ “softer”: wide margin, more violations.
