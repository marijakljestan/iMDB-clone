package com.example.backend.model;

import com.example.backend.model.CrewMember;
import com.example.backend.model.CrewRole;
import com.example.backend.model.Movie;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.*;

@Getter
@NoArgsConstructor
public class MovieCrew {

   private CrewRole role;
   public Collection<CrewMember> crewMember;
   public Movie movie;
   

   public java.util.Collection<CrewMember> getCrewMember() {
      if (crewMember == null)
         crewMember = new java.util.HashSet<CrewMember>();
      return crewMember;
   }

   public java.util.Iterator getIteratorCrewMember() {
      if (crewMember == null)
         crewMember = new java.util.HashSet<CrewMember>();
      return crewMember.iterator();
   }

   public void setCrewMember(java.util.Collection<CrewMember> newCrewMember) {
      removeAllCrewMember();
      for (java.util.Iterator iter = newCrewMember.iterator(); iter.hasNext();)
         addCrewMember((CrewMember)iter.next());
   }

   public void addCrewMember(CrewMember newCrewMember) {
      if (newCrewMember == null)
         return;
      if (this.crewMember == null)
         this.crewMember = new java.util.HashSet<CrewMember>();
      if (!this.crewMember.contains(newCrewMember))
         this.crewMember.add(newCrewMember);
   }

   public void removeCrewMember(CrewMember oldCrewMember) {
      if (oldCrewMember == null)
         return;
      if (this.crewMember != null)
         if (this.crewMember.contains(oldCrewMember))
            this.crewMember.remove(oldCrewMember);
   }

   public void removeAllCrewMember() {
      if (crewMember != null)
         crewMember.clear();
   }

}