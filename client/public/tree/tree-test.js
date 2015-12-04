factories.factory('d3Factory', d3Service);

d3Service.$inject =  ['$document', '$q', '$rootScope'];

function d3Service($document, $q, $rootScope) {

  function expand(d){
      var children = (d.children)?d.children:d._children;
      if (d._children) {
          d.children = d._children;
          d._children = null;
      }
      if(children)
        children.forEach(expand);
  }
  //took out of drawTree because not using in there, only being called in collapse all
  function collapse(d) {
    if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
    }
  }


var margin = {top: 20, right: 120, bottom: 20, left: 120},
    width = 960 - margin.right - margin.left,
    height = 800 - margin.top - margin.bottom;


function DrawTree(repo){

  var i = 0,
      duration = 750;

  var tree = d3.layout.tree()
      .size([height, width]);

  var circles = {};
  var paths = {};
  var labels = {};

  var diagonal = d3.svg.diagonal()
      .projection(function(d) { return [d.y, d.x]; });

  var svg = d3.select("#repo-tree").append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var colors = ["#bd0026", "#fecc5c", "#fd8d3c", "#f03b20", "#B02D5D",
    "#9B2C67", "#982B9A", "#692DA7", "#5725AA", "#4823AF",
    "#d7b5d8", "#dd1c77", "#5A0C7A", "#5A0C7A"];

  var root = JSON.parse(repo);
  root.x0 = height / 2;
  root.y0 = 0;

  this.collapseAll = function(){
    root.children.forEach(collapse);
    collapse(root);
    update(root);
  };

  this.expandAll = function() {
    expand(root);
    update(root);
  };

  root.children.forEach(collapse);
  update(root);

  function update(source) {

    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);

    var depthCounter = 0;

    // Normalize for fixed-depth.
    nodes.forEach(function(d) {
      d.y = d.depth * 180;
      //sets link color
      if (d.depth == 1) {
        d.linkColor = colors[(depthCounter % (colors.length - 1))];
        depthCounter++;
      }
    });
    //Set link colors based on parent color
    nodes.forEach(function (d) {
      var obj = d;
      while ((obj.source && obj.source.depth > 1) || obj.depth > 1) {
          obj = (obj.source) ? obj.source.parent : obj.parent;
      }
      d.linkColor = (obj.source) ? obj.source.linkColor : obj.linkColor;
    });

    // Update the nodes…
    var node = svg.selectAll("g.node")
      .data(nodes, function(d) {
        return d.id || (d.id = ++i);
      });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
        .on("click", click);
        // .on("mouseover", mouseover)
        // .on("mouseout", mouseout);

    nodeEnter.append("circle")
      .attr("r", 1e-6)
      .style("fill", function(d) {
        circles[d._children] = this;
        return d.source ? d.source.linkColor : d.linkColor;
      })
      .style("fill-opacity", ".8")
      //change?
      .style("stroke", function (d) {
          return d.source ? d.source.linkColor : d.linkColor;
    });

    nodeEnter.append("text")
      .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1e-6);

    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

    nodeUpdate.select("circle")
      .attr("r", 7)
      .style("fill", function (d) {
        return d.source ? d.source.linkColor : d.linkColor;
      })
      .style("fill-opacity", function (d) {
        return ((d.depth + 1) / 5);
      });

    nodeUpdate.select("text")
        .style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
        .remove();

    nodeExit.select("circle")
        .attr("r", 1e-6);

    nodeExit.select("text")
        .style("fill-opacity", 1e-6);

    // Update the links…
    var link = svg.selectAll("path.link")
        .data(links, function(d) { return d.target.id; });

    var rootCounter = 0;

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function(d) {
          var o = {x: source.x0, y: source.y0};
          return diagonal({source: o, target: o});
        })
        .style("stroke", function (d, i) {
          if (d.source.depth === 0) {
            rootCounter++;
            return (d.source.children[rootCounter - 1].linkColor);
          }
          else {
            return (d.source) ? d.source.linkColor : d.linkColor;
          }
        });
    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function(d) {
          var o = {x: source.x, y: source.y};
          return diagonal({source: o, target: o});
        })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function(d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }//end update

  // Toggle children on click.
  function click(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    update(d);
  }

  // function mouseover(d) {
  //   d3.select(this).append("text")
  //     .attr("class", "hover")
  //     .attr('transform', function(d){
  //         return 'translate(5, -10)';
  //     })
  //     .text(d.name + ": " + d.id);
  // }

  // // Toggle children on click.
  // function mouseout(d) {
  //     d3.select(this).select("text.hover").remove();
  // }

  update(root);

  // d3.select(self.frameElement).style("height", "800px");

}//end DrawTree

  var service = {
    DrawTree: DrawTree
  };

  return service;
}

