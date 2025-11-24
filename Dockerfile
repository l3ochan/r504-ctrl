FROM node:14.21.3

WORKDIR /app

# Installer git
RUN apt-get update && apt-get install -y git

# Le repo sera cloné au runtime
CMD ["bash", "-c", "\
  if [ ! -d /app/.git ]; then \
      git clone https://github.com/l3ochan/r504.git /app ; \
  else \
      git pull ; \
  fi && \
  npm install && \
  node ./bin/www \
"]
