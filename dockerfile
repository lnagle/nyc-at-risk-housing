FROM jupyter/docker-stacks-foundation

WORKDIR /app

RUN conda install geopandas
RUN conda install geodatasets -c conda-forge
