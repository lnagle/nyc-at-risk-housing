FROM continuumio/miniconda3

WORKDIR /app

RUN conda install geopandas
RUN conda install geodatasets -c conda-forge