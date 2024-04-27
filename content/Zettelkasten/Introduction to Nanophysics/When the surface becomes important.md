In Solid State Physics is common to neglect surfaces of materials and to focus on bulk properties. This is surely true in the limit of the number of atoms $N \to +\infty$, but what happen when the number of atoms decreases, and specifically, how can we establish a threshold over which the surfaces must be considerated ?
Let's consider a cluster of $N$ atoms (generally referred as nanocluster or nanoparticle), each of which has a radius of $R_0$. 
We then consider the fact that the volume occupied from the $N$ atoms is

$$ V_{tot} = V_{atom}N = \frac{4}{3} \pi R_0^3N $$
If we know imagine that this cluster is arranged as a sphere, one can define a quantity called effective radius by defining:

$$R_{eff} = N^{1/3}R_0$$

So that we imagine this cluster of $N$ atoms as a sphere of radius $R_{eff}$ in which the atoms are arranged according to the Bravais lattice typical of the system (in a top/down reasoning one can also imagine to carve a sphere of $N$ atoms from an infinite Bravais lattice).
Having defined this radius one can also readily define its surface as:

$$S = 4\pi R_{eff}^2 = 4\pi R_0^2 N^{2/3} $$
And also the projection $S_{att}$ of the atom surface on the surface $S$, as $S_{att} = \pi R_0^2$ , so that, if we want to count the numbers of atoms on the cluster surface one can simply evaluate:

$$N_{sur} = \frac{S}{S_{att}} = \frac{4\pi R_0^2 N^{2/3}}{\pi R_0^2} = 4 N^{2/3}$$
So that one can express a fraction of the atoms on the cluster surface against the total number:

$$ f = \frac{N_{sur}}{N} = 4N^{-1/3} = 4 \frac{R_0}{R_{eff}} $$

Where in the last equality we utilised the definition of effective radius.
In order to establish when a surface can be neglected is interesting first to see some numerical evaluation of $f$ for various number of atoms $N$ in the cluster.

One obtains:
- $N = 10^{23}\ \mbox{atom}\qquad f \simeq 8.6 \cdot 10^{-6}$
- $N = 10^{6}\ \mbox{atom}\qquad f \simeq 0.04$
- $N = 10^{3}\ \mbox{atom}\qquad f \simeq 0.40$
- $N = 10^{2}\ \mbox{atom}\qquad f \simeq 0.86$

**Is safe to say that for $f<0.01$ , i.e. the surface atoms are the $1 \%$ of the total number, the surface contribution can be neglected and only the bulk properties can be considered.
We start talking of nanophysics when this fraction is exceeded (? I think so, but a reference would be nice.)

