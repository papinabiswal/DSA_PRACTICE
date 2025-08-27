class UndergroundSystem {
  constructor() {
    // id -> { station: string, time: number }
    this.checkIns = new Map();

    // "start->end" -> { total: number, count: number }
    this.routes = new Map();
  }

  checkIn(id, stationName, t) {
    this.checkIns.set(id, { station: stationName, time: t });
  }

  checkOut(id, stationName, t) {
    const info = this.checkIns.get(id);
    if (!info) return; // LeetCode guarantees valid sequences; safe guard.
    const key = `${info.station}->${stationName}`;
    const duration = t - info.time;

    const agg = this.routes.get(key) || { total: 0, count: 0 };
    agg.total += duration;
    agg.count += 1;
    this.routes.set(key, agg);

    this.checkIns.delete(id); // free memory for finished trip
  }

  getAverageTime(startStation, endStation) {
    const key = `${startStation}->${endStation}`;
    const agg = this.routes.get(key);
    return agg ? agg.total / agg.count : 0;
  }
}

const u = new UndergroundSystem();
u.checkIn(45, "Leyton", 3);
u.checkIn(32, "Paradise", 8);
u.checkIn(27, "Leyton", 10);
u.checkOut(45, "Waterloo", 15); // duration 12
u.checkOut(27, "Waterloo", 20); // duration 10
u.checkOut(32, "Cambridge", 22); // duration 14
console.log(u.getAverageTime("Leyton", "Waterloo")); // (12 + 10) / 2 = 11
