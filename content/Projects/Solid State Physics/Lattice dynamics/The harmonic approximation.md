The harmonic approximation is the main idea in solving problems in lattice dynamics, specifically we are using the approximations stated in [[Projects/Solid State Physics/Lattice dynamics/Lattice dynamics approach]] and using together to justify the expansion of the $\mathcal{E}$, up to the second order, hence the name.
First we use the pair-wise interaction approximation

$$\mathcal{E}({\bar{R}_{I}}) =\frac{1}{2} \sum_{\bar{R}_{I},\bar{R}_{i} '} \phi(|\bar{R}_{I}-\bar{R}_{I}'|)$$

Then we make the small displacement approximation by substituting $\bar{R}_{I}\to \bar{r} = \bar{R} + \bar{u}(\bar{R}, t)$, in order to obtain:

$$\mathcal{E}({\bar{r}_1,\bar{r}_2,\dots\bar{r}_N }) =\frac{1}{2} \sum_{{\bar{r}},{\bar{r}} '} \phi(|{\bar{r}}-{\bar{r}}'|)$$

Given now the fact that $|\bar{u}(\bar{R},t)|<<a$, we can simplify:

$$\mathcal{E}({\bar{r}_1,\bar{r}_2,\dots\bar{r}_N }) =\frac{1}{2} \sum_{{\bar{r}},{\bar{r}} '} \phi(|{\bar{r}}-{\bar{r}}'|) \simeq \frac{1}{2} \sum_{{\bar{R}},{\bar{R}} '} \phi(|{\bar{r}}-{\bar{r}}'|) $$

Finally we can then write

$$\mathcal{E}({\bar{r}_1,\bar{r}_2,\dots\bar{r}_N }) =\frac{1}{2} \sum_{{\bar{R}},{\bar{R}} '} \phi(|\bar{R} + \bar{u}(\bar{R}, t)-(\bar{R}' + \bar{u}'(\bar{R}', t))|) = \frac{1}{2} \sum_{{\bar{R}},{\bar{R}} '} \phi(|\bar{R} -\bar{R}' + \bar{u}(\bar{R}, t) - \bar{u}'(\bar{R}', t)|) $$

Notice now that, given $|\bar{u}(\bar{R},t)|<<a$, and $|\bar{u}(\bar{R}',t)|<<a$ it follows, by the triangle inequality $|\bar{u}(\bar{R}, t) - \bar{u}'(\bar{R}', t)|<<0$ so that one can expand the function in Taylor's series.
The detail of the expansion will be explored in the specific section.